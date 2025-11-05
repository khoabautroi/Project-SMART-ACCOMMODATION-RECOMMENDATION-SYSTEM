# -*- coding: utf-8 -*-
from collections import defaultdict
import random

def load_interactions(path):
    """
    Expect CSV with header: user_id,item_id
    """
    interactions = []
    with open(path, "r", encoding="utf-8") as f:
        header = f.readline().strip().split(",")
        idx_u = header.index("user_id")
        idx_i = header.index("item_id")
        for line in f:
            if not line.strip():
                continue
            parts = [p.strip() for p in line.strip().split(",")]
            interactions.append((parts[idx_u], parts[idx_i]))
    return interactions

def split_train_test(interactions, test_ratio=0.2, seed=42):
    random.seed(seed)
    user_items = defaultdict(set)
    for u,i in interactions:
        user_items[u].add(i)
    train_ui = defaultdict(set)
    test_ui  = defaultdict(set)
    for u, items in user_items.items():
        items = list(items)
        if len(items) == 1:
            train_ui[u].add(items[0])
            continue
        k = max(1, int(len(items)*test_ratio))
        test_set = set(random.sample(items, k))
        for it in items:
            (test_ui if it in test_set else train_ui)[u].add(it)
    return train_ui, test_ui
