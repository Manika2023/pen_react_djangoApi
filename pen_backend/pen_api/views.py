from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import status
from .models import Contact
from .serializers import ContactSerializer

@api_view(['POST'])
def create_contact(request):
    if request.method == 'POST':
        serializer = ContactSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            
            # Custom response
            return Response({
                "message": "Contact form submitted successfully!",
                "data": serializer.data
            }, status=status.HTTP_201_CREATED)
        
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

from .models import Subscriber
from .serializers import SubscriberSerializer

@api_view(['POST'])
def subscribe(request):
    serializer = SubscriberSerializer(data=request.data)
    if serializer.is_valid():
        # Check if email is already subscribed
        if Subscriber.objects.filter(email=serializer.validated_data['email']).exists():
            return Response({"message": "Email already subscribed."}, status=status.HTTP_400_BAD_REQUEST)
        
        serializer.save()
        return Response({"message": "Subscription successful!"}, status=status.HTTP_201_CREATED)
    return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
