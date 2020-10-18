from rest_framework import serializers
from leads.models import Lead,Marketing,Customers,ProductDevelopment,ProductOperations,HR,ProfitL

# Lead Serializer
class LeadSerializer(serializers.ModelSerializer):
  class Meta:
    model = Lead 
    fields = '__all__'



class MarketingSerializer(serializers.ModelSerializer):
  class Meta:
    model = Marketing 
    fields = '__all__'



class CustomersSerializer(serializers.ModelSerializer):
  class Meta:
    model = Customers 
    fields = '__all__'


class ProductDevelopmentSerializer(serializers.ModelSerializer):
  class Meta:
    model = ProductDevelopment 
    fields = '__all__'


class ProductOperationsSerializer(serializers.ModelSerializer):
  class Meta:
    model = ProductOperations 
    fields = '__all__'


class HRSerializer(serializers.ModelSerializer):
  class Meta:
    model = HR 
    fields = '__all__'

class ProfitLSerializer(serializers.ModelSerializer):
  class Meta:
    model = ProfitL 
    fields = '__all__'
