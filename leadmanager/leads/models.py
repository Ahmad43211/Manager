from django.db import models
from django.contrib.auth.models import User


class Lead(models.Model):
    name = models.CharField(max_length=100)
    email = models.EmailField(max_length=100, unique=True)
    message = models.CharField(max_length=500, blank=True)
    owner = models.ForeignKey(
        User, related_name="leads", on_delete=models.CASCADE, null=True)
    created_at = models.DateTimeField(auto_now_add=True)






class Marketing(models.Model):
    social_media_followers = models.IntegerField(default=0)
    website_visitors = models.IntegerField(default=0)
    website_to_lead_ratio = models.IntegerField(default=0)

    owner = models.ForeignKey(
        User, related_name="marketings", on_delete=models.CASCADE, null=True)
    created_at = models.DateField()




class Customers(models.Model):
    net_promoter_score = models.IntegerField(default=0)
    net_new_customers = models.IntegerField(default=0)
    number_of_customers = models.IntegerField(default=0)
    owner = models.ForeignKey(
        User, related_name="customers", on_delete=models.CASCADE, null=True)
    created_at = models.DateField()




class ProductDevelopment(models.Model):
    development_frequency = models.IntegerField(default=0)
    estimation_accuracy = models.IntegerField(default=0)
    test_coverage = models.IntegerField(default=0)
    
    owner = models.ForeignKey(
        User, related_name="pds", on_delete=models.CASCADE, null=True)
    created_at = models.DateField()




class ProductOperations(models.Model):
    average_reaction_time = models.IntegerField(default=0)
    average_resolution_time = models.IntegerField(default=0)
    customer_escalations = models.IntegerField(default=0)
    availability = models.FloatField(default=0.0)

    open_support_tickets = models.IntegerField(default=0)
    owner = models.ForeignKey(
        User, related_name="pos", on_delete=models.CASCADE, null=True)
    created_at = models.DateField()



class HR(models.Model):
    number_of_employees = models.IntegerField(default=0)
    number_of_open_positions = models.IntegerField(default=0)
    time_to_hire = models.IntegerField(default=0)
    attrition = models.IntegerField(default=0)
    owner = models.ForeignKey(
        User, related_name="hrs", on_delete=models.CASCADE, null=True)
    created_at = models.DateField()



class ProfitL(models.Model):
    software_revenue = models.IntegerField(default=0)
    other_revenue = models.IntegerField(default=0)
    professional_service_revenue = models.IntegerField(default=0)
    owner = models.ForeignKey(
        User, related_name="pls", on_delete=models.CASCADE, null=True)
    created_at = models.DateField()






