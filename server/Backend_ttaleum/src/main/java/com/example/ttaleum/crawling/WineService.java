package com.example.ttaleum.crawling;

import java.io.IOException;
import java.util.ArrayList;
import java.util.List;

import org.jsoup.Jsoup;
import org.jsoup.nodes.Document;
import org.jsoup.nodes.Element;
import org.jsoup.select.Elements;
import org.springframework.stereotype.Service;

import jakarta.annotation.PostConstruct;
import lombok.Builder;
import lombok.Data;

@Service
@Builder
@Data
public class WineService {
    private static String News_URL = "https://www.winenara.com/shop/product/product_lists?sh_category1_cd=10000&sh_category2_cd=10100&sh_category3_cd=10101";

    @PostConstruct
    public List<Wine> getWineDatas() throws IOException {
        List<Wine> wineList = new ArrayList<>();
        Document document = Jsoup.connect(News_URL).get();

        Elements contents = document.select("section ul.type2 li");

        for (Element content : contents) {
            Wine wine = Wine.builder()
                    .wine_image(content.select("a img").attr("abs:src")) // 이미지
                    .wine_title(content.select("h4 a").text()) // 제목
                    .build();
            wineList.add(wine); // 수정: newsList를 wineList로 변경
        }

        return wineList;
    }
}
