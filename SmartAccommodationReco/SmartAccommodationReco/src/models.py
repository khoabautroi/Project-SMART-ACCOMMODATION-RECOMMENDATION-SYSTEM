# -*- coding: utf-8 -*-
from collections import defaultdict, Counter
import math

# Popularity model
def train_popularity(train_ui):
    cnt = Counter()
    for u, its in train_ui.items():
        for it in its:
            cnt[it] += 1
    ranking = [it for it,_ in cnt.most_common()]
    return {"type":"pop", "ranking": ranking}

def recommend_popularity(model, user_train_items, k=10):
    ranking = model["ranking"]
    return [it for it in ranking if it not in user_train_items][:k]

# Item-based collaborative filtering (cosine over user sets)
def train_itemcf(train_ui):
    item_users = defaultdict(set)
    for u, its in train_ui.items():
        for it in its:
            item_users[it].add(u)
    items = list(item_users.keys())
    sims = defaultdict(dict)
    for i in range(len(items)):
        for j in range(i+1, len(items)):
            a, b = items[i], items[j]
            ua, ub = item_users[a], item_users[b]
            inter = len(ua & ub)
            sim = inter / math.sqrt(len(ua)*len(ub)) if inter>0 else 0.0
            sims[a][b] = sim
            sims[b][a] = sim
    return {"type":"itemcf", "items": items, "sims": sims}

def recommend_itemcf(model, user_train_items, k=10):
    sims = model["sims"]
    score = defaultdict(float)
    for it in user_train_items:
        for cand, s in sims.get(it, {}).items():
            if cand in user_train_items: 
                continue
            score[cand] += s
    ranked = sorted(score.items(), key=lambda x: x[1], reverse=True)
    return [it for it,_ in ranked][:k]
