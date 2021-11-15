from django.urls import path
from . import views

app_name = "divorces"

urlpatterns = [
    path("prediction", views.DivorcePredictionAPIView.as_view(), name="prediction"),
]
