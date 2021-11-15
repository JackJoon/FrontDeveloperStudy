import java.util.*;
import java.util.function.Function;

/**
 * 자바에서 제공해주는 Functional Interface(함수형 인터페이스)
 * Runnable
 * Supplier<T>
 * Consumer<T>
 * Funcation<T>
 * Predicate<T>
 * BinaryOperator<T>
 * UnaryOperator<T>
 * BiPredicate<T,U>
 * BiConsumer<T,U>
 * BigConsumer<T,U>
 * BiFunction<T,U,R>
 * Comparator<T>
 *
 */
public class JdkStream {
    public static void main(String[] args) {
        boolean rtnFlg = false;

        List<Map<String,Object>> list = new ArrayList<Map<String, Object>>();
        Map<String,Object> map = new HashMap();

        map.put("aaaa", "1111");
        map.put("bbbb", "2222");
        map.put("cccc", "3333");
        map.put("dddd", "4444");
        map.put("eeee", "5555");
        map.put("ffff", "6666");
        map.put("gggg", "7777");

        list.add(map);

        for(Map<String,Object> map1 : list){
            if("4444".equals(map1.get("dddd"))) {
                rtnFlg = true;
                break;
            }
        }
        System.out.println("rtnFlg : " + rtnFlg);
        System.out.println("===============================================================");

        Optional<List<Map<String, Object>>> list1 = Optional.ofNullable(list);
        //list1 -> System.out.println("111111")
        ;
    }

}
