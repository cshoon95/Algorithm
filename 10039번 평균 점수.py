# 변수 선언
user = [0]*5 # [0, 0, 0, 0, 0]

# 변수 입력    
for i in range(len(user)):
    user[i] = int(input())

    # 40미만일 경우 40으로 set           
    if user[i] < 40:
        user[i] = 40

# 평균 값 
avg = (sum(user)/len(user)) 
print(int(avg))
