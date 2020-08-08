# 변수 선언
inputNum = int(input())

# 별 출력 
for i in range(inputNum):
    print(' '*i, '*'*((inputNum-i)*2-1))

for i in range(inputNum-2, -1, -1):
    print(' '*i, '*'*((inputNum-i)*2-1))
