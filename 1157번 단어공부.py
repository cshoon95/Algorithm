S = input().upper() # 대문자로 변환
T = [] # 알파벳 담을 리스트

for i in set(S): # set = list를 쪼갬. ex) abc = [a][b][c]
    T.append(S.count(i))

idx = [i for i,x in enumerate(T) if x==max(T)] # 최대값 

if len(idx)>1:print("?") # 최대값이 1개보다 많으면 "?"
else: print(list(set(S))[T.index(max(T))]) # S[max]
