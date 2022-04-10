def solution(triangle):
    dp=[]
    for i in range(len(triangle)):
        dp.append([0]*(i+1))
    dp[0][0]=triangle[0][0]
    for i in range(1,len(triangle)):
        for j in range(len(dp[i-1])):
            dp[i][j]=max(dp[i][j],dp[i-1][j]+triangle[i][j])
            dp[i][j+1]=max(dp[i][j+1],dp[i-1][j]+triangle[i][j+1])
    return max(dp[len(triangle)-1])