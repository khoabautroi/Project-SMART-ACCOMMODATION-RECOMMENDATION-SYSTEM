# -*- coding: utf-8 -*-
import math

def precision_recall_ndcg_at_k(train_ui, test_ui, recommender, k=10):
    users = sorted(set(train_ui.keys()) | set(test_ui.keys()))
    precs, recs, ndcgs = [], [], []
    for u in users:
        gt = set(test_ui.get(u, set()))
        if not gt:
            continue
        recs = recommender(set(train_ui.get(u, set())))

        hits = [1 if it in gt else 0 for it in recs]
        tp = sum(hits)
        prec = tp / max(1, len(recs))
        rec  = tp / max(1, len(gt))

        dcg = sum(1.0/math.log2(idx+2) for idx,h in enumerate(hits) if h)
        ideal = sum(1.0/math.log2(i+2) for i in range(min(len(gt), k)))
        ndcg = (dcg/ideal) if ideal>0 else 0.0

        precs.append(prec); recs.append(rec); ndcgs.append(ndcg)

    if not precs:
        return 0.0, 0.0, 0.0
    n = len(precs)
    return sum(precs)/n, sum(recs)/n, sum(ndcgs)/n
