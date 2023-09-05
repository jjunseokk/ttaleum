package com.example.demo.Product;

import java.util.ArrayList;
import java.util.List;

import org.springframework.stereotype.Service;

@Service
public class ProductService {
	private final ProductRepository productRepository;

	public ProductService(ProductRepository productRepository) {
		this.productRepository = productRepository;
	}

	// 삽입구현
	public void save(ProductDTO productDTO) {
		ProductEntity productEntity = ProductEntity.toSaveEntity(productDTO);
		productRepository.save(productEntity);
	}
	
	// 전체 조회
	public List<ProductDTO> findAll(){
		List<ProductEntity> productEntityList = productRepository.findAll();
		List<ProductDTO> productDTOList = new ArrayList<>();
		for(ProductEntity productEntity : productEntityList) {
			productDTOList.add(ProductDTO.toProductDTO(productEntity));
		}
		return productDTOList;
	}
}
