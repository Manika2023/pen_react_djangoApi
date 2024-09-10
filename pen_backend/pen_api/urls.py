
from django.urls import path,include
from . import views
urlpatterns = [
   path('contacts/',views.create_contact,name="contact"),
   path('subscribe/',views.subscribe,name="subscriber")
]
