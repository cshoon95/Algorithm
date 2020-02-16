package com.company;

public class Main<i> {

    private static int number = 9;
    private static int[] heap = {7, 6, 5, 8, 3, 5, 9, 1, 6};

    public static void main(String[] args) {
        // 먼저 전체 구조를 최대 힙구조로 바꾼다.
        for(int i=1; i<number; i++) {
            int c = i;
            do {
                int root = (c-1)/2;
                if(heap[root] < heap[c]) {
                    int temp = heap[c];
                    heap[c] = heap[root];
                    heap[root] = temp;
                }
                c = root;
            }while (c != 0);
        }
        // 크기를 줄여가며 반복적으로 힙을 구성
        for(int i = number - 1; i >= 0; i--) {
            int temp = heap[0];
            heap[0] = heap[i];
            heap[i] = temp;
            int root = 0;
            int c = 1;
            do {
                c = 2 * root + 1;
                // 자식 중에 더 큰 값 찾기
                try {
                    if(heap[c] < heap[c+1] && c < i-1) {
                        c++;
                    }
                    // 루트보다 자식이 더 크다면 교환
                    if(heap[root] <heap[c] && c<i) {
                        temp = heap[root];
                        heap[root] = heap[c];
                        heap[c] = temp;
                    }
                } catch (Exception e) {
                    e.printStackTrace();
                }
                root = c;
            } while(c<i);
        }
        for(int i=0; i<number; i++) {
            System.out.print(heap[i] + " ");
        }
    }


}