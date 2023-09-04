package com.example.demo.Product;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
@RequestMapping("/Product")
public class ProductController {
	private final ProductService productService;

	public ProductController(ProductService productService) {
		this.productService = productService;
	}

	// 삽입 구현
	@PostMapping("/insertProduct")
	public void insertProduct(@RequestBody ProductDTO productDTO) {
		System.out.println("insert 성공");
		productService.insert(productDTO);
	}
	
	@GetMapping("test")
	public void test() {
		System.out.println("프로덕트 테스트");
	}

}
