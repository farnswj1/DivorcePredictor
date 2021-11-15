from django.core.management.base import BaseCommand
from django.conf import settings
from divorces.models import DivorceCase
from sklearn.model_selection import train_test_split
from sklearn.ensemble import RandomForestClassifier
from sklearn.metrics import confusion_matrix, classification_report
import pandas as pd
import random
import joblib
import os


class Command(BaseCommand):
    help = "Creates a ML model that will predict the sentiment of text"

    def handle(self, *args, **kwargs):
        random.seed(3)

        self.stdout.write("Loading the data...")
        df = pd.DataFrame(DivorceCase.objects.values())

        self.stdout.write("Preprocessing the data...")
        df = df.sample(frac=1, random_state=3).reset_index(drop=True)
        df.drop("id", axis=1, inplace=True)

        self.stdout.write("Training the model...")
        target = "is_divorced"

        X = df.drop(target, axis=1)
        y = df[target]

        X_train, X_test, y_train, y_test = train_test_split(
            X,
            y,
            test_size=0.30,
            random_state=4,
            stratify=y
        )

        model = RandomForestClassifier()
        model.fit(X_train, y_train)

        self.stdout.write("Testing the model...")
        y_train_pred = model.predict(X_train)
        self.stdout.write("Train set metrics:")
        self.stdout.write(str(confusion_matrix(y_train, y_train_pred)))
        self.stdout.write(str(classification_report(y_train, y_train_pred)))

        y_test_pred = model.predict(X_test)
        self.stdout.write("Test set metrics:")
        self.stdout.write(str(confusion_matrix(y_test, y_test_pred)))
        self.stdout.write(str(classification_report(y_test, y_test_pred)))

        self.stdout.write("Saving the model...")
        joblib.dump(model, settings.MODEL_DIR)
        self.stdout.write("Model saved in " + settings.MODEL_DIR)
