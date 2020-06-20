# PotHoleDetector

Reason for selecting problem statement 

Bad road infrastructure can lead to reduced road safety. One of the major problems we see on Indian roads is potholes. Increased traffic, blocked lanes, injuries, and even deaths; all of these issues are linked to potholes and bad roads in a major way. Bad roads resulted in nearly 10,000 deaths last year in India. Nearly 3,000 of these deaths were because of potholes.

our team  firmly believe in the philosophy, that all of the biggest problems in our world can be solved using technology and innovation. We intend to do just that by putting the power to change our roads in everyone's hands!

The main motive and objective of the project is to save lives of people by trying to minimize accidents on the road Potholes are serious concern issue in our country. People find it difficult to avoid potholes while driving. We are addressing this problem by building a pothole detector system and helping the drivers know about the road conditions by alerting them through maps.

To detect potholes present in Roads via a camera mounted to public/private vehicles and intimate the corresponding authorities for necessary act.The System updates the Geo-Location of every potholes detected to a centralized data center with the image and severity.

The data in the data center is used to analyze Road conditions for immediate and prioritized actions.The Analyzed Report Lists the potholes in the most commuted roads and helps the authorities to decide the quickness of the action.

Data Set Images

The below link provides the data set images folder location due to space constraint we uploaded on google drive.The results obatined in the Results folder are with accuracy and efficiency https://drive.google.com/file/d/1pUcpNrRm3fZrwmGfH0aGm_WEA5Pl9sZ5/view?usp=sharing

Technology stack used for Project*

PotHole Detection : Azure Function

MachineLearning Model to detect PotHoles : Azure Custom vision API - Predictions

Data Annotation & Training of Modal : Azure Custom vision API - Training

API Host : Azure deployment

Database : Azure SQL Server

Primary Host : Azure Virtual Machine

Data visualization : Azure Power BI

Object recognition : Python - OpenCV

Implementation

Recorder video clip will be converted into image frames using open CV and will be shared to the Azure Custom vision Api to detect the Potholes. The Images with potholes prediction percentage of 50 or more will be considered and the corresponding geo-location of the image will be send to the Azure functions api. The azure function api will take care of persisting the received information into the azure sql server database. The admin can extract the data and a visualize the data with Azure Power BI reports for analytics and can group the data by Date, Location, Seviority, Most Used etc.
