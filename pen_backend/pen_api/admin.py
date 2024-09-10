from django.contrib import admin
from .models import Contact,Subscriber
# Register your models here.
@admin.register(Contact)
class ContactAdmin(admin.ModelAdmin):
     list_display=['id','name','email','message']

@admin.register(Subscriber)
class SubscriberAdmin(admin.ModelAdmin):
     list_display=['id','email','subscribed_at']
