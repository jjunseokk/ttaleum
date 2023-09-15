package com.example.ttaleum.Product;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import org.springframework.stereotype.Service;

import jakarta.transaction.Transactional;

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
	
	//findById
	@Transactional
	public ProductDTO findById(Long product_id) {
		Optional<ProductEntity> optionalProductEntity = productRepository.findById(product_id);
		if (optionalProductEntity.isPresent()) {
			ProductEntity productEntity = optionalProductEntity.get();
			ProductDTO productDTO = ProductDTO.toProductDTO(productEntity);
			return productDTO;
		} else {
			return null;
		}
	}
	
	//수정 구현
	public ProductDTO update(ProductDTO productDTO) {
		ProductEntity productEntity = ProductEntity.toUpdateEntity(productDTO);
		productRepository.save(productEntity);
		return findById(productDTO.getProduct_id());
	}
	
	// 삭제 구현
	public void delete(Long product_id) {
		productRepository.deleteById(product_id);
	}
}
