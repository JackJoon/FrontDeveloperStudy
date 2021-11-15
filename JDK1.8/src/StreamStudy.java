import java.util.*;
import java.util.function.Predicate;
import java.util.stream.Collectors;
import java.util.stream.Stream;


/**
 * 스트림 API
 */
public class StreamStudy {

    public static void main(String[] args) {
        List<String> names = new ArrayList<>();

        names.add("keesun");
        names.add("whiteship");
        names.add("toby");
        names.add("foo");

        /**
         * stream 뒤에 오퍼레이션은 크게 두개로 나뉠수 있따. 중계오퍼레이션, 종료 오퍼레이션
         * 중계 오퍼레이션 (Stream을 리턴한다. )
         * Lazy 하다(종료 오퍼레이션이 실행하기 전까지 실행하지 않는다.)
         * filter,map,limit,skip,sorted,flatmap
         * map과 filter 의 차이
         *  map
         *  요소들을 대,소문자 변형 등 의 작업을 하고 싶을떄 사용 가능 합니다.
         *   (새로운 스트림을 생성해야 할때)
         *  filter
         * 길이의 제한, 특정문자포함 등 의 작업을 하고 싶을때 사용 가능합니다.
         *  (필터 조건의 의한 필터링 후 해당 문자의 대한 스트림을 return)
         *  flatMap
         *  여러개의 스트림을 한개의 스트림으로 합쳐줌.
         *
         * 종료 오퍼레이션 (Stream을 리턴하지 않는다.)
         * collect,allMatch,count,foreach
         */

        names.stream().map((s) -> {
            System.out.println(s);
            return s.toUpperCase();
        }).collect(Collectors.toList());

        System.out.println("=========================================================");

        names.forEach(System.out::println);

        System.out.println("=========================================================");
        System.out.println("병렬 처리");

        //parallelStream
        List<String> collect = names.parallelStream().map((s) -> {
            System.out.println(s + " " +Thread.currentThread().getName());
            return s.toUpperCase();
        }).collect(Collectors.toList());

        System.out.println("===================StreamAPI2 ============");

        List<OnlinClass> onlinClasses = new ArrayList<>();
        onlinClasses.add(new OnlinClass(1,"spring boot", true));
        onlinClasses.add(new OnlinClass(2,"spring data jpa", true));
        onlinClasses.add(new OnlinClass(3,"spring mvc", false));
        onlinClasses.add(new OnlinClass(4,"spring core", false));
        onlinClasses.add(new OnlinClass(5,"rest api development", false));

        System.out.println("spring 으로 시작하는 수업");
        onlinClasses.stream()
                .filter(o -> o.getTitle().startsWith("spring"))
                .forEach(o -> System.out.println(o.getId()));

        System.out.println("close 되지 않는 수업");
        onlinClasses.stream()
                        .filter(c -> !c.isClosed())
                        .forEach(c -> System.out.println(c.getId()));

        onlinClasses.stream()
                        .filter(Predicate.not(OnlinClass::isClosed))
                        .forEach(c -> System.out.println(c.getId()));

        System.out.println("수업 이름만 모아서 스트림 만들기");
        onlinClasses.stream()
                .map(OnlinClass::getTitle)
                .forEach(System.out::println);


        List<OnlinClass> javaClasses = new ArrayList<>();
        javaClasses.add(new OnlinClass(6,"The Java, Test", true));
        javaClasses.add(new OnlinClass(7,"The Java, Code manipulation", true));
        javaClasses.add(new OnlinClass(8,"The Java, 8 to 11", false));

        List<List<OnlinClass>> sssEvents = new ArrayList<>();
        sssEvents.add(onlinClasses);
        sssEvents.add(javaClasses);

        System.out.println("두 수업 목록에 들어있는 모든 수업 아이디 출력");
        sssEvents.stream().flatMap(Collection::stream)
                        .forEach(oc -> System.out.println(oc.getId()));
        System.out.println("10부터 1씩 증가하는 무제한 스트림 중에서 앞에 10개 빼고 최대 10개 까지만");
        Stream.iterate(10, i -> i +1)
                        .skip(10)
                        .limit(10)
                        .forEach(System.out::println);
       System.out.println("자바 수업 중에 Test가 들어있는 수업이 있는 지 확인");
       boolean test = javaClasses.stream().anyMatch(oc -> oc.getTitle().contains("Test"));
       System.out.println(test);

        System.out.println("스프링 수업 중에 제목에 spring이 들어가는 것만 모아서 List로 만들기");
        List<String> spring = onlinClasses.stream().filter(oc -> oc.getTitle().contains("spring"))
                .map(OnlinClass::getTitle)
                .collect(Collectors.toList());
        spring.forEach(System.out::println);

        List<Map<String,String>> list = new ArrayList();
        Map<String,String> map = new HashMap<String,String>();

        map.put("cardPdNum","BD12");
        map.put("title","11");
        map.put("name","222");

        list.add(map);

    }
}
