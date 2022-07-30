# 변수 선언
hamb = [] 
beve = []

# 변수 입력
for i in range(0, 3):
    inputNum = int(input())
    hamb.append(inputNum)

for i in range(0, 2):
    inputNum = int(input())
    beve.append(inputNum)

# 결과값 출력
print(min(hamb) + min(beve) - 50)
