import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

/**
 * 람다식이란?
 * 람다 대수는 이름을 가질 필요가 없다. - 익명 함수(Anonymous functions)
 */
public class howJdk {

    static void checkStr() {
        List<Integer> list = new ArrayList<>();
        for(int i=0; i<10; i++) {
            list.add(i);
        }

        // list의 모든 요소를 출력
        list.forEach(i-> System.out.print(i+","));

       /* // list에서 2 또는 3의 배수 제거
        list.removeIf(x->x%2==0 || x%3==0);
        System.out.println(list);

        // list의 각 요소에 10을 곱한다
        list.replaceAll(i->i*10);
        System.out.println(list);

        Map<String, String> map = new HashMap<>();
        map.put("1", "1");
        map.put("2", "2");
        map.put("3", "3");
        map.put("4", "4");

        // map의 모든 요소를 {k, v}의 형식으로 출력한다.
        map.forEach((k, v)-> System.out.printf("{"+k+","+v+"},"));
        System.out.println();*/
    }

    static void defLadmda() {
        System.out.println();
    }




    public static void main(String[] args) {
        checkStr();
    }

}
