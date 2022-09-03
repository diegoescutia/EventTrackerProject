package com.skilldistillery.hiketracker.entities;

import static org.junit.jupiter.api.Assertions.*;

import java.time.LocalDate;
import java.time.LocalTime;

import javax.persistence.EntityManager;
import javax.persistence.EntityManagerFactory;
import javax.persistence.Persistence;

import org.junit.jupiter.api.AfterAll;
import org.junit.jupiter.api.AfterEach;
import org.junit.jupiter.api.BeforeAll;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;


class RouteTest {
	
	private static EntityManagerFactory emf;
	private EntityManager em;
	
	
	@BeforeAll
	static void setUpBeforeClass() throws Exception {
		emf = Persistence.createEntityManagerFactory("HikeTrackerJPA");
	}

	@AfterAll
	static void tearDownAfterClass() throws Exception {
		emf.close();
	}

	@BeforeEach
	void setUp() throws Exception {
		em = emf.createEntityManager();
	}

	@AfterEach
	void tearDown() throws Exception {
		em.close();
	}

	@Test
	void test_route_entity_mapping() {
		
		Route route = em.find(Route.class, 1);
		assertEquals("first", route.getDescription());
		assertEquals(LocalDate.parse("2022-01-15"), route.getDate());
		assertEquals(LocalTime.parse("00:21:00"), route.getTime());
		assertEquals(2.0, route.getDistance());
		assertEquals(8.2, route.getPace());
	}

}
