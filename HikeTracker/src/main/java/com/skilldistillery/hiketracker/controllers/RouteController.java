package com.skilldistillery.hiketracker.controllers;

import java.util.List;

import javax.servlet.http.HttpServletResponse;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PatchMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.skilldistillery.hiketracker.entities.Route;
import com.skilldistillery.hiketracker.services.RouteService;

@RestController
@RequestMapping("api")
public class RouteController {

	@Autowired
	private RouteService routeServ;
	
	@GetMapping("routes")
	public List<Route> index(){
		return routeServ.index();
	}
 	
	@GetMapping("routes/{id}")
	public Route showById(@PathVariable int id, HttpServletResponse resp) {
		Route route = routeServ.findById(id);
		if(route == null) {
			resp.setStatus(404);
		}
		return route;
	}
	
	@PostMapping("routes")
	public Route create(@RequestBody Route route, HttpServletResponse resp) {
		Route created = null;
		
		try {
			created = routeServ.create(route);
			resp.setStatus(201);
		} catch (Exception e) {
			e.printStackTrace();
			resp.setStatus(400);
		}
		return created;
	}
	
	@PatchMapping("routes/{id}")
	public Route update(@RequestBody Route route, @PathVariable int id, HttpServletResponse resp) {
		 Route updated = null;
		  try {
			updated= routeServ.update(id, route);
		} catch (Exception e) {
			e.printStackTrace();
			resp.setStatus(400);
		}
		
		return updated;
	}
	
	@DeleteMapping("routes/{id}")
	public Boolean delete(@PathVariable int id, HttpServletResponse resp) {
		Boolean deleted = routeServ.delete(id);
		
		if(deleted) {
			resp.setStatus(204);
		}else {
			resp.setStatus(404);
		}
		
		return deleted;
	}
	
	
}
