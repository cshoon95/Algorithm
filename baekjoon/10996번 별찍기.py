# 변수 
inputNum = int(input())
odd = inputNum - inputNum // 2 # 홀수번째 
even = inputNum // 2 # 짝수번째

# Main
for i in range(inputNum):
        print("* " * odd)
        print(" *" * even)

