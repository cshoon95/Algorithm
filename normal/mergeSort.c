package com.company;

import java.util.Arrays;

public class Main {
    private static int number = 8;
    private static int[] sorted = new int[8]; // 정렬 배열은 반드시 전역변수로 설정

     static void merge(int a[], int m, int middle, int n) {
        int i = m;
        int j = middle + 1;
        int k = m;
        // 오름차 순서대로 배열에 삽입
        while(i <= middle && j<= n) {
            if(a[i] <= a[j]) {
                sorted[k] = a[i];
                i++;
            } else {
                sorted[k] = a[j];
                j++;
            }
            k++;
        }
        // 남은 데이터 삽입
        if(i > middle) { // n이 종료되면 나머지 반쪽 합체
            for(int t=j; t<=middle; t++) {
                sorted[k] = a[t];
            } k++;
        } else {
            for(int t=i; t<=middle; t++) {
                sorted[k] = a[t];
                k++;
            }
        }
        // 정렬된 배열읍 삽입
        for(int t=m; t<=n; t++) {
            a[t] = sorted[k];
        }
    }

     static void mergeSort(int a[], int m, int n) {
        // 크기가 1보다 큰 경우
        if(m < n) {
            int middle = (m+n) / 2;
            mergeSort(a, m, middle);
            mergeSort(a, middle+1, n);
            merge(a, m, middle, n);
        }
    }

    public static void main(String[] args) {
        int[] list = {58,8,28,3,18,6,33,20};
        int size = list.length;
        System.out.println("정렬 수행 전: "+ Arrays.toString(list));
        System.out.println("-----------------병합 정렬 수행 시작------------------");
        mergeSort(list, 0, size-1);
        for(int i=0; i<size; i++) {
            System.out.print(list[i] + " ");
        }
    }

}