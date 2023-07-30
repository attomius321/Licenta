package com.management.app.student;

import org.springframework.boot.CommandLineRunner;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

import java.util.List;

@Configuration
public class StudentConfig {

    @Bean
    CommandLineRunner commandLineRunner(StudentRepository repository) {
        return args -> {
            Student player1 = new Student(
                    1L,
                    "Marian",
                    "Mihael",
                    "marian.mihael@gmail.com",
                    1,
                    "UPT AC CTI"
            );

            Student player2 = new Student(
                    2L,
                    "Mirel",
                    "Cioban",
                    "mirel.cioban@gmail.com",
                    2,
                    "UPT AC CTI"
            );

            Student player3 = new Student(
                    3L,
                    "Strat",
                    "Stat",
                    "strat.stat@gmail.com",
                    2,
                    "UPT AC CTI"
            );

            repository.saveAll(
                    List.of(player1, player2, player3)
            );
        };
    }
}
