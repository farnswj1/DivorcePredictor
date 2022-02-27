from django.urls import path
from divorces import views

app_name = "divorces"

urlpatterns = [
    path("prediction", views.DivorcePredictionAPIView.as_view(), name="prediction"),
]
