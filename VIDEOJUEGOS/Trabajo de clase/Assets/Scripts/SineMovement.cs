using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class SineMovement : MonoBehaviour
{

    public float amplitude;
    public float speed;
    public Vector2 direction;
    float angle;
    Vector2 origin;

    void Start()
    {
        origin = transform.position;
    }

    void Update()
    {
        transform.position = origin + direction * new Vector2(Mathf.Sin(angle) * amplitude, 0);
        angle += speed * Time.deltaTime;
    }
}
