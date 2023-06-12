from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from divorces.serializers import DivorceCaseSerializer
from divorces.functions import get_ml_model
import pandas as pd

# Create your views here.
class DivorcePredictionAPIView(APIView):
    classifier = get_ml_model()

    def post(self, request, *args, **kwargs):
        serializer = DivorceCaseSerializer(data=request.data)

        if serializer.is_valid():
            data = pd.DataFrame([serializer.data])
            prediction = self.classifier.predict(data)[0]
            return Response({'prediction': prediction}, status=status.HTTP_200_OK)

        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
