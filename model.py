import joblib

import numpy as np
import pandas as pd

def predict(data):
    train = pd.read_csv("../cleaned_data/cleaned_house_crime_school.csv")
    RandomForestRegressorModel = joblib.load("../models/random_forest.sav")
    data = pd.DataFrame(data)

    return np.exp(RandomForestRegressorModel.predict(data))
