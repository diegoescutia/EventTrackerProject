package com.skilldistillery.hiketracker.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.skilldistillery.hiketracker.entities.Route;

public interface RouteRepository extends JpaRepository<Route, Integer>{

}
