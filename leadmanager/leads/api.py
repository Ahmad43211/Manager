from leads.models import Lead,Marketing,Customers,ProductDevelopment,ProductOperations,HR,ProfitL
from rest_framework import viewsets, permissions
from .serializers import LeadSerializer,MarketingSerializer,CustomersSerializer,ProductDevelopmentSerializer,ProductOperationsSerializer,HRSerializer,ProfitLSerializer

# Lead Viewset


class LeadViewSet(viewsets.ModelViewSet):
    permission_classes = [
        permissions.IsAuthenticated,
    ]
    serializer_class = LeadSerializer

    def get_queryset(self):
        return self.request.user.leads.all()

    def perform_create(self, serializer):
        serializer.save(owner=self.request.user)





class MarketingViewSet(viewsets.ModelViewSet):
    permission_classes = [
        permissions.IsAuthenticated,
    ]
    serializer_class = MarketingSerializer
    
    def get_queryset(self):
        return self.request.user.marketings.all().order_by('-created_at')

    def perform_create(self, serializer):
        serializer.save(owner=self.request.user)

class CustomersViewSet(viewsets.ModelViewSet):
    permission_classes = [
        permissions.IsAuthenticated,
    ]
    serializer_class = CustomersSerializer

    def get_queryset(self):
        user=self.request.user
        return Customers.objects.filter(owner=user,created_at__gte='2020-01-01').order_by('-created_at')

      

    def perform_create(self, serializer):
        serializer.save(owner=self.request.user)


class ProductDevelopmentViewSet(viewsets.ModelViewSet):
    permission_classes = [
        permissions.IsAuthenticated,
    ]
    serializer_class = ProductDevelopmentSerializer

    def get_queryset(self):
        user=self.request.user
        return ProductDevelopment.objects.filter(owner=user).order_by('-created_at')[0:5]

    def perform_create(self, serializer):
        serializer.save(owner=self.request.user)


class ProductOperationsViewSet(viewsets.ModelViewSet):
    permission_classes = [
        permissions.IsAuthenticated,
    ]
    serializer_class = ProductOperationsSerializer

    def get_queryset(self):
        return self.request.user.pos.all().order_by('-created_at')

    def perform_create(self, serializer):
        serializer.save(owner=self.request.user)



class HRViewSet(viewsets.ModelViewSet):
    permission_classes = [
        permissions.IsAuthenticated,
    ]
    serializer_class = HRSerializer

    def get_queryset(self):
        return self.request.user.hrs.all().order_by('-created_at')

    def perform_create(self, serializer):
        serializer.save(owner=self.request.user)




class ProfitLViewSet(viewsets.ModelViewSet):
    permission_classes = [
        permissions.IsAuthenticated,
    ]
    serializer_class = ProfitLSerializer

    def get_queryset(self):
        user=self.request.user
        return ProfitL.objects.filter(owner=user).extra(
        select={'fieldsum':'software_revenue + other_revenue + professional_service_revenue'},
        order_by=('-fieldsum',)
)


    def perform_create(self, serializer):
        serializer.save(owner=self.request.user)


