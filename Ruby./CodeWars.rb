# 7/1/2020

# Jaden Smith, the son of Will Smith, is the star of films such as The Karate Kid
# (2010) and After Earth (2013). Jaden is also known for some of his philosophy 
# that he delivers via Twitter. When writing on Twitter, he is known for almost 
# always capitalizing every word. For simplicity, you'll have to capitalize each 
# word, check out how contractions are expected to be in the example below.

# Your task is to convert strings to how they would be written by Jaden Smith. The strings are actual quotes from Jaden Smith, but they are not capitalized in the same way he originally typed them.

class String
    def toJadenCase
        self.split(" ").map(&:capitalize).join(" ")
    end
end

# 7/2/20
# Given an array, find the integer that appears an odd number of times.
# There will always be only one integer that appears an odd number of times.

def find_it(seq)
    hash = {}
    seq.each do |element|
        hash[element] ? hash[element] += 1 : hash[element] = 1
    end
    hash.find do |key, value|
        return key if value.odd?
    end   
end

# 7/3/20
# In this little assignment you are given a string of space separated numbers,
# and have to return the highest and lowest number.

def high_and_low(numbers)
    array = numbers.split(" ").map { |element| element.to_i }
    "#{array.max} #{array.min}"
end

# 7/4/20
# There is a bus moving in the city, and it takes and drop some people in each bus stop.
# You are provided with a list (or array) of integer arrays (or tuples).
# Each integer array has two items which represent number of people get into bus (The first item) 
# and number of people get off the bus (The second item) in a bus stop.
# Your task is to return number of people who are still in the bus after the last bus station (after the last array). 
# Even though it is the last bus stop, the bus is not empty and some people are still in the bus, and they are probably sleeping there :D
# Take a look on the test cases.
# Please keep in mind that the test cases ensure that the number of people in the bus is always >= 0. So the return integer can't be negative.
# The second value in the first integer array is 0, since the bus is empty in the first bus stop.

def number(bus_stops)
    bus_stops.reduce(0) do |sum, array|
        sum + array[0] - array[1]
    end
end

# 7/5/20
# The Western Suburbs Croquet Club has two categories of membership, Senior and Open. 
# They would like your help with an application form that will tell prospective members which category they will be placed.
# To be a senior, a member must be at least 55 years old and have a handicap greater than 7.
# In this croquet club, handicaps range from -2 to +26; the better the player the lower the handicap.

def openOrSenior(data)
    data.map do |list|
        list[0] >= 55 && list[1] > 7 ? "Senior" : "Open"
    end
end

# 7/6/20
# An isogram is a word that has no repeating letters, consecutive or non-consecutive. 
# Implement a function that determines whether a string that contains only letters is an isogram. 
# Assume the empty string is an isogram. Ignore letter case.

def is_isogram(string)
    array = string.downcase.split("")
    array.uniq.length == array.length ? true : false
end