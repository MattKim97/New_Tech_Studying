#Introduction to Mongo Db Atlas

#Atlas is a developer data platform
#handles all the lifecycle behinds the scene
#Replica set, stored on more than one server ensures data redundance and high availability
 #cluster is a group of servers that store your data

#Creating and Deploying an Atlas Cluster

#Organizations Group and Define users and teams, to grant access to projects

#Projects are containers for clusters, data lakes, and other resources

from pymongo.mongo_client import MongoClient
from pymongo.server_api import ServerApi
uri = "mongodb+srv://mattkim0797:JKJXbuotyYQXNEQ4@mongodblearning.uheosr3.mongodb.net/?retryWrites=true&w=majority&appName=MongoDBLearning"
# Create a new client and connect to the server
client = MongoClient(uri, server_api=ServerApi('1'))
# Send a ping to confirm a successful connection
try:
    client.admin.command('ping')
    print("Pinged your deployment. You successfully connected to MongoDB!")
except Exception as e:
    print(e)
