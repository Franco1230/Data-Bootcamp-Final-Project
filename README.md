# Data Bootcamp Final Project: Real Estate House Price Prediction Website
## In associate with: Catherine, Hayley, Nasrin and Franco

House Price Prediction using Machine Learning Algorithm
In this project, we are aiming to predict the housing price in Melbourne Metro using Machine Learning to predict house prices based on various factors. The dataset that we are using includes the house selling data from 2016 to 2018(from Kaggle).
As we all know that real estate is always a hot topic in Australia. We are interested in understanding the main drive as it's highly believed that a house value is more than just the location or the landsize. With the dataset that we have, we are going to incorporate all the features to understand the relationship between them. 


### Problem Statement
The goal of this analysis is to help us understanding the relationship between different house features and how they are used to predict house price.

### The benefits of Data Science in Real Estate Analysis
1. For home buyers, they can use this to check a predictive market price based on their own ideal requirement of future house. 

2. For seller, this can help them to estimate the price of properties with the help of historical data. 

3. For real estate agent, this allows them to provide their customer with more information based on the Machine Learning algorithm. Also, it helps them to plan marketing strategy according to their customer needs.

### Hypothesis
The analysis is based on the factors that could potentially affect the house price:
1. Distance between the suburb and Melbourne CBD: 
   Hypothesis - The distance from CBD has direct correlation to house prices regardless of the region. 
	
2. Nearby Schools:
   Hypothesis - Higher demand exists in suburbs with more schools in neighbourhood. This is especially important for young families. Hence, it will drive the house prices.

3. Crime rate: 
   Hypothesis - Crime rate affects the market prices indirectly as people would prefer to live in suburb that is safe and secure. 3 years of data was annualised to try finding out the relationship between crime rate and house price.

4. No of Rooms / Bathrooms / Car park
   Hypothesis - Either of these features have direct impact on the house prices.



### Operating environment
1. Language - Python / JavaScript / HTML / CSS3
2. Server - Python / Flask
3. Visualisation - Tableau
4. User - Web Browser 


### Data Cleaning
1. For the model to learn and train properly, we cleaned the data to ensure that all 0 and Nan are removed from the dataset.
2. Next, some columns were formatted to the proper sign to avoid any error.
3. Also removed some rows that has the 0 values as we deemed that info as inaccurate.

![cleaning image](images/datacleaning.PNG)

### Machine Learning
1. Feature transformation to make the data compatible to the model that we used. We also split the data into testing and training data
2. With the similar steps, we train the model with 3 different ML models, that includes Decision Tree, Logistic Regression and Random Forest. As the Random Forest model gets the highest accuracy point, we used this model to do our final house prices prediction. Finally, we merged this prediction data that we obtained to the original dataset for final visualization
![comparison image](images/comparison.png)


### Visualization Tool
1. Tableau is used for visualization for the relationship between the features and the house prices. 
2. We also used it to compare the results between the Actual Prices and Prediction Prices

## As the outcome, a simple web page is built for users to enter input (features) to predict house prices.
### Application
We used python and flask to build the website and testing the results. We created a JSON map of features and values to allow user to freely choose. Once they make the request, the application will receive and return a response containing the predicted price.


## Results and Discussion
1. Red means positive, Black means negative. The brighter the colour, the larger the correlation magnitude. Now, if you look at the chart below, bathroom/room/car/land size/building area has positive correlation to the house prices. 
2. Based on the algorithm, Nearby Schools / Distance from CBD / Year Built / Crime Rate has insignificant impacts on the house prices. This will be shown in the tableau visualisation later as well. 
3. We have gone through by implementing different machine learning algorithms, random forest shows the highest score; Hence, this model has been used to predict the house price in web application later. Comparison result is shown above.
![heatmap image](images/heatmap.png)

## Screenshot of the application







## Limitation
1. We had limited access to latest data on the web. While we are trying to access domain / real estate, any data related to property will require a fee. 
2. Too much data may hinder the accuracy of the testing result. Much time were used to trial and error and removing the columns that are not required to increase the score. 


## Conclusion
House Prices are growing crazily regardless of the era we are in, as fluctuation happens over time. Through this we have tried to identify the factors that are less significant. We have used the machine learning to solve this real-world problem. This solution can be tested if we have most updated data to make a better prediction. 

