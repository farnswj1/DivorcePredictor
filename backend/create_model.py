from sklearn.model_selection import train_test_split
from sklearn.ensemble import RandomForestClassifier
from sklearn.metrics import confusion_matrix, classification_report
from pathlib import Path
import pandas as pd
import random
import joblib


def main() -> None:
    random.seed(3)

    print("Loading the data...")
    data_path = Path("data").resolve() / "data.csv"
    df = pd.read_csv(data_path)

    print("Preprocessing the data...")
    df = df.sample(frac=1, random_state=3).reset_index(drop=True)

    print("Training the model...")
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

    print("Testing the model...")
    y_train_pred = model.predict(X_train)
    print("Train set metrics:")
    print(str(confusion_matrix(y_train, y_train_pred)))
    print(str(classification_report(y_train, y_train_pred)))

    y_test_pred = model.predict(X_test)
    print("Test set metrics:")
    print(str(confusion_matrix(y_test, y_test_pred)))
    print(str(classification_report(y_test, y_test_pred)))

    print("Saving the model...")
    model_path = Path("classifiers").resolve() / "model.joblib"
    joblib.dump(model, model_path)
    print(f"Model saved in {model_path}")


if __name__ == '__main__':
    main()
