import joblib

import numpy as np
import pandas as pd


def predict(data):
    RandomForestRegressorModel = joblib.load("models/random_forest.sav")
    for key, value in data.items():
        items = []
        if value == '':
            value = 0
        items.append(float(value))
        data[key] = items

    data = pd.DataFrame(data)

    p = RandomForestRegressorModel.predict(data)

    return p
