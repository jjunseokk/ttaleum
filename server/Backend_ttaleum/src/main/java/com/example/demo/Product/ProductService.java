package com.example.demo.Product;

import org.springframework.stereotype.Service;

@Service
public class ProductService {
	private final ProductRepository productRepository;

	public ProductService(ProductRepository productRepository) {
		this.productRepository = productRepository;
	}

	// 삽입구현
	public void insert(ProductDTO productDTO) {
		ProductEntity productEntity = ProductEntity.toInsertEntity(productDTO);
		productRepository.save(productEntity);
	}
}
