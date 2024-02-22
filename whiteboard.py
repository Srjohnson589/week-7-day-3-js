# ------------Description---------
# Create a function that given a list which represents street lights,
# determine if an outage has occurred. A street with a total
# number of "F" greater than or equal to 2 returns "Outage", anything below returns "Power"
# ----------Example----------
# solution([ 'T', 'F', 'F', 'F' ]) => "Outage"
# solution([ 'T', 'T', 'T', 'T', 'F' ]) => "Power"

# given a list with Fs and Ts
# return Outage or Power

# numofF
# loop through the list, if equals F increase numofF by 1
# if num of F > 1 - Outage

def solution(lst):
    numofF = 0
    for item in lst:
        if item == 'F':
            numofF+=1
    if numofF > 1:
        return "Outage"
    else:
        return "Power"
    
print(solution([ 'T', 'T', 'T', 'T', 'F' ]))

# O(n) - one loop
# lets see.. constant time ?