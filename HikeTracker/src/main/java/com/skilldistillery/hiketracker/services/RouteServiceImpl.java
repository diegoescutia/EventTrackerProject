package com.skilldistillery.hiketracker.services;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.skilldistillery.hiketracker.entities.Route;
import com.skilldistillery.hiketracker.repositories.RouteRepository;

@Service
public class RouteServiceImpl implements RouteService {

	@Autowired
	private RouteRepository repo;

	@Override
	public List<Route> index() {
		return repo.findAll();
	}

	@Override
	public Route findById(int id) {
		Route r = null;
		Optional<Route> routeOp = repo.findById(id);
		if (routeOp.isPresent()) {
			r = routeOp.get();
		}
		return r;
	}

	@Override
	public Route create(Route route) {
		return repo.saveAndFlush(route);
	}

	@Override
	public Route update(int routeId, Route route) {

		Optional<Route> routeOp = repo.findById(routeId);
		if (routeOp.isPresent()) {
			route.setId(routeId);
			repo.saveAndFlush(route);
		}
		return route;
	}

	@Override
	public boolean delete(int routeId) {
		repo.deleteById(routeId);
		return !repo.existsById(routeId);
	}

}
