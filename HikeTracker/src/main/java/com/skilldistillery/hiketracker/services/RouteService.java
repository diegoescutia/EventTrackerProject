package com.skilldistillery.hiketracker.services;

import java.util.List;

import com.skilldistillery.hiketracker.entities.Route;

public interface RouteService {

	List<Route> index();
	
	Route findById(int id);
	
	Route create(Route route);
	
	Route update(int routeId, Route route );
	
	boolean delete(int routeId);
	
	
}
