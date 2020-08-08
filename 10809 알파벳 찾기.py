#문자열 입력 
s = list(map(str, input()))

#알파벳 리스트
alpha = list('abcdefghijklmnopqrstuvwxyz')

#알파벳 길이만큼 array에 -1 
array = [-1 for i in range(len(alpha))]

for i in range(len(s)):
    # 알파벳 리스트의 인덱스와 문자열 인덱스가 같으면 i
    if array[alpha.index(s[i])] == -1:
        array[alpha.index(s[i])] = i
for j in array:
    print(j, end=" ")
