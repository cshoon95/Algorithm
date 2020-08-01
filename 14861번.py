# 사용자 입력 
userInputA = int(input())
userInputB = int(input())

# x사분면 
1, 2, 3, 4 

# 사분면 확인 
def exe():
    if userInputA > 0 and userInputB > 0 :
        print(1)
        
    elif userInputA < 0 and userInputB > 0 :
        print(2)
        
    elif userInputA < 0 and userInputB < 0 : 
        print(3)
        
    elif userInputA > 0 and userInputB < 0 : 
        print(4)

# main
exe()
