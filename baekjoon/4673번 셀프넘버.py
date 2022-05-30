def self_number():
    arr=list()
    result=0
    for i in range(1, 10001):
        if i<10:
            result = i+i
            arr.append(result)
        elif i<100:
            result = i+(i//10)+(i%10)
            arr.append(result)
        elif i<1000:
            result = i+(i//100)+((i%100)//10)+(i%10)
            arr.append(result)
        elif i<10000:
            result = i+(i//1000)+((i%1000)//100)+((i%100)//10)+(i%10)
            if result <10001:
                arr.append(result)
            
    arr.sort()

    arrPrint = [i for i in range(1, 10001)]
    
    notSelf = [item for item in arrPrint if item not in arr]
    for each in notSelf:
        print(each)

self_number();
