package com.example.demo;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class Test {
	@GetMapping("/test")
	public void test() {
		System.out.println("테스트 성공!");
	}
}
