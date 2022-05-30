import sys

# 변수 선언
N = int(sys.stdin.readline())
Num = []

# 입력된 숫자들 리스트
for i in range(N):
    Num.append(sys.stdin.readline());

# 정렬 메소드 
Num = sorted(Num)

# 출력
for i in range(N):
    print(Num[i]);
