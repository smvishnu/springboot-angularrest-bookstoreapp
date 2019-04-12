/**
 * 
 */
package app.repository;

import app.model.Book;
import org.springframework.data.mongodb.repository.MongoRepository;

/**
 * @author Vishnukanth
 *
 */
public interface BookRepository extends MongoRepository<Book, String>{

}
