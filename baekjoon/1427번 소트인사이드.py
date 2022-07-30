# 변수 선언
N = int(input()) #입력 값

Num1 = []
Num2 = []

for i in range(N):
   Number1 = int(input())
   Number2 = int(input())
   Num1 = list(map(int, str(Number1))) # Num에 list로 입력한 숫자를 대입
   Num2 = list(map(int, str(Number2))) # Num에 list로 입력한 숫자를 대입

# 정렬
Num1 = sorted(Num1)
Num2 = sorted(Num2)

# 출력
for i in range(N):
    print(Num1, Num2)
