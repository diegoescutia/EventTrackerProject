package com.skilldistillery.hiketracker.repositories;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.skilldistillery.hiketracker.entities.Route;

public interface RouteRepository extends JpaRepository<Route, Integer>{

	List<Route> findByLocation(String location);
	
	List<Route>	findByDistanceBetween(double low, double high);
	
	
}
