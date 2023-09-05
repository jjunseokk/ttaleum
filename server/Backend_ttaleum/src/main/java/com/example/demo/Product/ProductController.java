package com.example.demo.Product;

import java.util.List;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;

@Controller
@RequestMapping("/Product")
public class ProductController {
	private final ProductService productService;

	public ProductController(ProductService productService) {
		this.productService = productService;
	}

	// 삽입 구현
	@PostMapping("/insertProduct")
	public void saveProduct(@RequestBody ProductDTO productDTO) {
		System.out.println("insert 성공");
		productService.save(productDTO);
	}

	// 조회 구현
	@GetMapping("select")
	public void findAll() {
		List<ProductDTO> productDTOList = productService.findAll();
		System.out.println("ProductDTOList=" + productDTOList);
	}

	// 하나만 조회
	@GetMapping("/selectOne")
	public void selectProductById(@RequestParam Long product_id) {
		productService.findById(product_id);
		System.out.println(productService.findById(product_id));
	}
	
	// 수정 구현
	@PostMapping("/update")
	public void updateProduct(@RequestBody ProductDTO productDTO) {
		productService.update(productDTO);
		System.out.println("product update 실행");
	}

	// 삭제 구현
	@GetMapping("/delete")
	public void delete(@RequestParam Long product_id) {
		productService.delete(product_id);
		System.out.println("delete 실행");
	}
}
