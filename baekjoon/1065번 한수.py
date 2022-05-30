def Hansu(n):
    cnt = 0
    #입력된 수가 백의자리수 미만 단위면 모두 한수이니 입력값 리턴 
    if(n < 100):
        return n
    else:
        for i in range(100, (n+1)):
            #A = 100의 자리수 B = 10의 자리수 C = 1의 자리수
             A = (i//100)
             B = (i%100)//10
             C = (i%10)

             if(A-B) == (B-C):
                 cnt+=1
        
        return(99+cnt)


inputNum = int(input())

result = Hansu(inputNum)
print(result)
